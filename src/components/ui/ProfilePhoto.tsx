import Image from "next/image";

interface ProfilePhotoProps {
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ProfilePhoto({
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 160px, 200px",
}: ProfilePhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-card ${className}`}>
      <Image
        src="/images/profile.jpg"
        alt="Victor Caporici"
        width={640}
        height={640}
        priority={priority}
        sizes={sizes}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
