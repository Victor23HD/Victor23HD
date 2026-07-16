import { TestimonialAvatar } from "@/components/ui/TestimonialAvatar";
import type { TestimonialItem } from "@/lib/types";

interface TestimonialsSectionProps {
  title: string;
  viewLinkedInLabel: string;
  items: TestimonialItem[];
}

export function TestimonialsSection({
  title,
  viewLinkedInLabel,
  items,
}: TestimonialsSectionProps) {
  const published = items.filter((item) => item.published);

  if (published.length === 0) return null;

  return (
    <section className="testimonials">
      <div className="section-shell">
        <div className="section-rule" aria-hidden />
        <h2 className="testimonials-title">{title}</h2>
        <div className="testimonials-grid">
          {published.map((item) => (
            <article key={item.id} className="testimonial-card">
              <header className="testimonial-card__header">
                <TestimonialAvatar
                  name={item.name}
                  initials={item.initials}
                  avatar={item.avatar}
                />
                <div className="testimonial-card__meta">
                  <h3 className="testimonial-card__name">{item.name}</h3>
                  <p className="testimonial-card__role">{item.role}</p>
                  <p className="testimonial-card__company">{item.company}</p>
                  {item.linkedin ? (
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="testimonial-card__link"
                    >
                      {viewLinkedInLabel}
                    </a>
                  ) : null}
                </div>
              </header>
              <p className="testimonial-card__quote">{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
