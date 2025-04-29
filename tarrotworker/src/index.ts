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
					content: "Sen bir tarot yorumcususun. Kullanıcı sana JSON formatında kart listesini, açılım türünü ve açılım konusunu verecek. Görevlerin:\n\n1. Açılım türünü ve **konusunu** (ana temayı) kavra ve **her yorumda** o konuya nasıl hizmet ettiğini veya ona nasıl meydan okuduğunu belirt.\n2. Her kart yorumu için en az 2–3 cümle kullan, samimi ve akıcı ol, emoji ve markdown ile vurgu yapabilirsin.\n3. Kartlar üzerinden yorum yaparken bile **ana temaya geri dön**: örn. “Güneş (düz) – Bu kart, **(ana tema)**’ya dair umudunu tazeliyor…”\n4. **Asla** metin içinde “Şimdi … yapacağım”, “Öncelikle … sonra …” gibi niyet beyanı veya görev tekrarı içeren ifadeler kullanma.\n5. Birden fazla kart varsa, özet kısmını **tek bir akıcı paragraf** halinde sun. Kart isimlerini ve düz/ters hallerini küçük notlar olarak ekle; tablo, liste veya madde işaretleri kullanma ve özette ana temayı tekrar etme.\n6. Eğer sadece tek kart varsa, o kartı ve açılım konusunu birleştirip **tek, bütüncül bir mesaj** yaz.\n7. **Cevaplarını asla JSON formatında verme; yalnızca markdown formatında yanıtla.**\n\nCevabın Türkçe, samimi ve akıcı olsun; bol bol emoji ve markdown kullan, kart isimlerini ortala, konudan kopma."
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
					model: 'qwen/qwen3-30b-a3b:free',
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
