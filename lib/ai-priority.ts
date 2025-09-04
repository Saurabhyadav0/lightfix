import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!, // must be set in .env
})

/**
 * Generate a priority score (1-10) for a streetlight outage complaint.
 *
 * @param title - Short title of the complaint
 * @param description - Detailed description of the issue
 * @param photoUrl - Optional URL of the uploaded photo
 * @returns Promise<number> Priority score (1-10)
 */
export async function generateStreetlightPriority(
  title: string,
  description: string,
  photoUrl?: string
): Promise<number> {
  try {
    if (!title?.trim() || !description?.trim()) {
      throw new Error("Title and description are required")
    }

    const prompt = `
You are a Streetlight Outage Prioritization AI.
Assign a priority score from 1 (least urgent) to 10 (most urgent) 
based ONLY on the complaint details below.

Complaint:
- Title: ${title}
- Description: ${description}
- Image URL: ${photoUrl ?? "No image provided"}

Scoring Guidelines:
- Major road, highway, public square, school zone, or accident-prone area -> Very High (8-10).
- Multiple lights out in the same stretch -> High (7-9).
- Safety risks (dark alleys, crime-prone areas, bus stops, crossings) -> High (7-10).
- Single light in a residential area with alternate lighting -> Medium (4-6).
- Minor flickering or cosmetic issues -> Low (1-3).

Return ONLY a single integer between 1 and 10 with no explanation.
`

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", // fast & cost-effective
      messages: [{ role: "user", content: prompt }],
      temperature: 0, // deterministic output
      max_tokens: 5, // ensures short integer-only output
    })

    const rawText = response.choices[0]?.message?.content?.trim() ?? ""
    const score = parseInt(rawText.match(/\b\d{1,2}\b/)?.[0] || "5", 10)

    // Clamp strictly to 1-10
    const safeScore = Math.min(10, Math.max(1, score))

    console.log("✅ Streetlight priority score:", safeScore)
    return safeScore
  } catch (error) {
    console.error("❌ Streetlight priority generation failed:", error)
    return 5 // default medium score on error
  }
}
