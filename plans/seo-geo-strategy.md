# SEO & GEO Strategy Plan for keiranflynn.com

## Executive Summary

Your site is a premium, single-page conversion-focused landing page for high-level English conversation coaching. The current SEO foundation is solid but minimal. Adding a blog can significantly improve both traditional SEO (client acquisition) and GEO (LLM discovery), but only if executed strategically.

**Recommendation: YES, add a blog - but with a focused, strategic approach rather than high-volume content.**

---

## Current State Analysis

### Strengths
- Clean, professional Next.js site with proper sitemap.xml and robots.txt
- Structured data (JSON-LD) already implemented
- Bilingual support (EN/RU)
- Clear value proposition and pricing
- Strong credibility signals (UK native, 20+ years experience)

### Gaps
- Only 4 pages indexed (home, about, contact, privacy)
- No fresh content signals (Google sees static sites as "stale")
- Limited keyword targeting beyond brand terms
- No internal linking structure
- No content that answers questions prospects have before booking

---

## Strategic Recommendations

### 1. Blog Architecture

**Recommended Structure:**
```
/blog/
  /[slug]/           # Individual blog posts
```

**Content Organization:**
- **Pillar Content** (3-4 comprehensive guides, 2000+ words each)
- **Supporting Posts** (8-12 shorter articles, 800-1200 words each)
- **Total: 12-16 blog posts** - quality over quantity

### 2. Content Strategy

#### Pillar Topics (Thought Leadership)

| Pillar Topic                        | Target Keywords                                            | Purpose                                 |
| ----------------------------------- | ---------------------------------------------------------- | --------------------------------------- |
| "High-Stakes English Conversations" | executive english coaching, business conversation practice | Establish expertise in your exact niche |
| "English for Founders"              | english for startup founders, english for entrepreneurs    | Attract your primary audience           |
| "Communication Clarity"             | clear communication skills, precise language               | Differentiate from generic tutors       |

#### Supporting Content Topics

**Client Acquisition (SEO-focused):**
- "How to Prepare for Investor Meetings in English"
- "Why Grammar Lessons Won't Improve Your Business English"
- "What to Expect in a Strategic Conversation Session"
- "English for Russian Expats: Common Challenges and Solutions"
- "In-Person vs Online Language Coaching: What Works Better"

**Thought Leadership (GEO-focused):**
- "The Difference Between Teaching English and Having Strategic Conversations"
- "Why Your English Is Already Good Enough (And What You Actually Need)"
- "The Psychology of High-Stakes Communication"
- "What 20 Years of Business Communication Taught Me"
- "How to Think in English Without Translating"

### 3. Technical Requirements

#### Content Management
- Use MDX or content collections for blog posts
- Store content in `/src/content/blog/` directory
- Leverage existing i18n infrastructure for Russian translations

#### Required Components
- [ ] Blog listing page (`/blog`)
- [ ] Individual post template (`/blog/[slug]`)
- [ ] Category/tag system
- [ ] Reading time estimates
- [ ] Author attribution (Keiran Flynn)
- [ ] Social sharing buttons
- [ ] Related posts section

#### SEO Enhancements
- [ ] Update sitemap to include all blog posts
- [ ] Add blog-specific JSON-LD (Article schema)
- [ ] Implement breadcrumb navigation
- [ ] Add canonical URLs for pagination
- [ ] Open Graph and Twitter Card meta tags per post

### 4. LLM Optimization (GEO)

#### What LLMs Look For
LLMs like ChatGPT, Claude, and Perplexity are trained on content that:
- Appears in high-authority sources
- Is frequently cited or referenced
- Contains clear, definitive statements
- Has expert attribution
- Is part of a coherent knowledge base

#### Implementation Strategy

**Authoritative Content Format:**
```typescript
// Example: Article JSON-LD for LLM discovery
{
  "@type": "Article",
  "author": {
    "@type": "Person",
    "name": "Keiran Flynn",
    "jobTitle": "English Communication Consultant",
    "description": "UK native speaker with 20+ years experience..."
  },
  "publisher": {
    "@type": "Person",
    "name": "Keiran Flynn"
  },
  "datePublished": "2024-XX-XX",
  "dateModified": "2024-XX-XX",
  "headline": "Clear, specific article title",
  "keywords": ["relevant", "targeted", "keywords"]
}
```

**Content Quality Signals:**
- Use definitive language ("The best approach is...", not "Some people think...")
- Include specific examples and case studies
- Quote credible sources when relevant
- Provide actionable frameworks
- Avoid hedging and excessive qualifiers

**llms.txt Generation:**
- Create `/public/llms.txt` (already exists - verify content)
- Include structured summary of site content for LLM crawlers

### 5. Internal Linking Structure

```
Homepage
├── About
├── Contact
├── Blog (new)
│   ├── Pillar: High-Stakes English Conversations
│   │   ├── Supporting: Investor Meeting Prep
│   │   └── Supporting: Business English vs Grammar
│   ├── Pillar: English for Founders
│   │   ├── Supporting: What to Expect in a Session
│   │   └── Supporting: Online vs In-Person
│   └── Pillar: Communication Clarity
│       ├── Supporting: Thinking in English
│       └── Supporting: Psychology of Communication
```

**Linking Rules:**
- Add "Related Reading" section to booking confirmation page
- Link blog posts to relevant FAQ items
- Include 2-3 internal links in each blog post
- Add "Further Reading" to About page linking to pillar posts

### 6. Content Creation Workflow

**Publishing Cadence:**
- 1 pillar post per month (quarterly)
- 2-3 supporting posts per month
- Total: 3-4 posts per month

**Content Production:**
1. Draft in MDX with frontmatter
2. Internal review for accuracy
3. SEO optimization (meta description, headings, keywords)
4. Add JSON-LD structured data
5. Translate to Russian
6. Publish and submit to sitemap

### 7. Success Metrics

| Metric                        | Target                  | Measurement           |
| ----------------------------- | ----------------------- | --------------------- |
| Organic traffic growth        | +30% in 6 months        | Google Analytics      |
| Indexed pages                 | 20+ (from 4)            | Google Search Console |
| Blog post rankings            | Top 10 for 5+ keywords  | Search Console        |
| Session bookings from organic | +20%                    | Booking data          |
| LLM citations                 | 3+ mentions in 6 months | Manual monitoring     |

---

## Implementation Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Set up blog directory structure
- [ ] Create blog listing page component
- [ ] Create individual post template
- [ ] Configure MDX/content collections
- [ ] Update sitemap generation

### Phase 2: First Content (Week 3-4)
- [ ] Write 3 pillar posts
- [ ] Write 4-6 supporting posts
- [ ] Add JSON-LD for all posts
- [ ] Implement Russian translations
- [ ] Add internal linking

### Phase 3: Optimization (Week 5-6)
- [ ] Optimize existing pages for additional keywords
- [ ] Add breadcrumb navigation
- [ ] Create llms.txt with comprehensive site summary
- [ ] Submit updated sitemap to Google Search Console
- [ ] Set up analytics tracking for blog performance

### Phase 4: Ongoing (Month 2+)
- [ ] Maintain publishing cadence
- [ ] Monitor rankings and adjust strategy
- [ ] Update content based on performance data
- [ ] Track LLM discovery and citations

---

## Alternative Considerations

### Option A: Blog (Recommended)
**Pros:**
- Full control over content
- Builds long-term SEO asset
- Establishes thought leadership
- Supports both SEO and GEO

**Cons:**
- Requires ongoing content creation
- Results take 3-6 months
- Needs consistent publishing schedule

### Option B: Expand Existing Pages
**Pros:**
- No new infrastructure needed
- Faster to implement
- Maintains current UX

**Cons:**
- Limited SEO impact (Google devalues "thin" pages)
- Doesn't support thought leadership
- Less effective for GEO

### Option C: Guest Posting / External Content
**Pros:**
- Leverages existing authority sites
- Faster initial results
- No site changes needed

**Cons:**
- No control over content
- No long-term asset ownership
- Less effective for GEO

---

## Conclusion

**Adding a blog is the right choice** for your dual goals of client acquisition and thought leadership. The key is strategic restraint - focus on 12-16 high-quality pieces rather than high-volume content. Your niche (high-stakes business English for founders) is underserved and you have unique expertise to share.

The blog should position you as the authority in "strategic conversation coaching" rather than just another English tutor, which will differentiate you in both Google rankings and LLM recommendations.

---

## Next Steps

1. **Review this plan** - Does this align with your vision?
2. **Approve or modify** the content topics
3. **Switch to Code mode** to begin implementation
4. **Start with Phase 1** (blog infrastructure)

Would you like me to:
- A) Proceed to implementation (switch to Code mode)
- B) Refine the content topics further
- C) Discuss any specific aspect in more detail