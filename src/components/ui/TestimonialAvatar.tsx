import Image from "next/image";
import { withBasePath } from "@/lib/paths";

interface TestimonialAvatarProps {
  name: string;
  initials: string;
  avatar?: string;
}

export function TestimonialAvatar({ name, initials, avatar }: TestimonialAvatarProps) {
  if (avatar) {
    return (
      <div className="testimonial-avatar">
        <Image
          src={withBasePath(avatar)}
          alt={name}
          width={52}
          height={52}
          className="testimonial-avatar__image"
        />
      </div>
    );
  }

  return (
    <div className="testimonial-avatar" aria-hidden>
      <span className="testimonial-avatar__initials">{initials}</span>
    </div>
  );
}
