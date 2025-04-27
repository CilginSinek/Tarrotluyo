type Card = {
	Meaning: string;
	Reversed: string;
	Astrological: string;
	Element: string;
	Chakra: string;
	Name: string;
	reversed: boolean;
};

interface RequestBody {
	cards: Card[];
	spreadTopic: string;
	spreadType: string;
}

interface Env {
	OPENAI_API_KEY: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 204,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type',
				},
			});
		}

		if (request.method !== 'POST') {
			return new Response('Method Not Allowed', { status: 405 });
		}

		try {
			const body: RequestBody = await request.json();
			const { cards, spreadTopic, spreadType } = body;

			if (!cards || !spreadType) return new Response('Bad Request', { status: 400 });

			const messages = [
				{
					role: 'system',
					content: `Sen bir tarot yorumcususun. Kullanıcı sana JSON formatında kart listesini, açılım türünü ve açılım konusunu verecek. Görev:
- Açılım türünü ve konusunu kavra buna göre kartları yorumla.
- Açılım konusuna dair bütün kartların anlamlarını (ters ya da düz olmasını dikkate alarak) birleştirip son mesajı özetle ayrı ayrı değil, özetlerken kartların sadece isimlerini ve ters düz olma durumunu kullanabilirsin.
- Eğer tek kart varsa özet yerine kart ve açılım konusunu birleştirip tek bir mesaj yaz.
Cevabın Türkçe, samimi ve akıcı olsun, her kart için en az 2–3 cümle kullan,bol bol emojiler ve markdown ile güzelleştirebilir vurgu yapabilirsin ama kart isimlerini ortalama.`,
				},
				{
					role: 'user',
					content: `Kartlar: ${cards
						.map(
							(card) =>
								`${card.Name} (${card.reversed ? 'Ters' : 'Düz'}) - ${card.Meaning} - ${card.Reversed} - ${card.Astrological} - ${card.Element} - ${card.Chakra}`
						)
						.join(', ')}
Açılım Türü: "${spreadType}"
Açılım Konusu: "${spreadTopic || 'Genel Yorum'}"`,
				},
			];
			const openaiResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					model: 'gpt-3.5-turbo',
					messages: messages,
					temperature: 0.7,
					max_tokens: 2000,
				}),
			});

			if (!openaiResponse.ok) {
				const error = await openaiResponse.text();
				console.error('OpenAI Error:', error);
				return new Response(JSON.stringify({ error: 'OpenAI API Error' }), { status: 500 });
			}

			const openaiData = await openaiResponse.json() as {
				choices: { message: { role: string; content: string } }[];
			};

			return new Response(JSON.stringify(openaiData.choices[0].message.content), {
				status: 200,
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			});
		} catch (err) {
			console.error(err);
			return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			});
		}
	},
} satisfies ExportedHandler<Env>;
