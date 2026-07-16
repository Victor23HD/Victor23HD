"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { localePath, type Locale } from "@/lib/i18n";
import { withBasePath } from "@/lib/paths";
import type { LifeContent, LifeGame, LifeTopic, MusicTrack } from "@/lib/types";

interface LifeSectionProps {
  locale: Locale;
  content: LifeContent;
}

export function LifeSection({ locale, content }: LifeSectionProps) {
  const gamesTag = content.featured.tag;
  const [activeFilter, setActiveFilter] = useState(gamesTag);
  const [activeTrackId, setActiveTrackId] = useState(content.music[0]?.id);

  const filters = useMemo(() => {
    const tags = [...new Set(content.topics.map((topic) => topic.tag))];
    return [{ id: gamesTag, label: gamesTag }, ...tags.map((tag) => ({ id: tag, label: tag }))];
  }, [content.topics, gamesTag]);

  const activeTopic = useMemo(
    () => content.topics.find((topic) => topic.tag === activeFilter),
    [activeFilter, content.topics],
  );

  const showGames = activeFilter === gamesTag;
  const showAnime = activeTopic?.id === "anime";
  const showMusic = activeTopic?.id === "music";

  return (
    <section className="section-shell">
      <header className="life-hero">
        <p className="life-hero__eyebrow">{content.eyebrow}</p>
        <h1 className="life-hero__title">{content.title}</h1>
        {content.intro ? <p className="life-hero__intro">{content.intro}</p> : null}
      </header>

      <div className="life-filters" role="tablist" aria-label={content.title}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter.id}
            className={`life-filter ${activeFilter === filter.id ? "life-filter--active" : ""}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {showGames ? (
        <LifeMediaPanel title={content.featured.title} items={content.games} />
      ) : null}

      {showAnime ? (
        <LifeMediaPanel title={activeTopic?.title ?? "Anime"} items={content.anime} />
      ) : null}

      {showMusic ? (
        <MusicPanel
          topic={activeTopic}
          tracks={content.music}
          activeTrackId={activeTrackId}
          onSelectTrack={setActiveTrackId}
        />
      ) : null}

      {activeTopic && !showGames && !showAnime && !showMusic ? (
        <TopicPanel topic={activeTopic} />
      ) : null}

      <p className="life-back">
        <Link href={localePath(locale, "sobre")} className="text-sm font-medium text-accent hover:underline">
          {content.backToAbout}
        </Link>
      </p>
    </section>
  );
}

function MusicPanel({
  topic,
  tracks,
  activeTrackId,
  onSelectTrack,
}: {
  topic?: LifeTopic;
  tracks: MusicTrack[];
  activeTrackId?: string;
  onSelectTrack: (id: string) => void;
}) {
  const activeIndex = Math.max(
    0,
    tracks.findIndex((track) => track.id === activeTrackId),
  );
  const activeTrack = tracks[activeIndex];
  const previousTrack = tracks[(activeIndex - 1 + tracks.length) % tracks.length];
  const nextTrack = tracks[(activeIndex + 1) % tracks.length];

  if (!activeTrack) return null;

  return (
    <section className="life-music-room">
      <div className="life-music-player">
        <div className="life-music-player__head">
          <div>
            <p className="life-music-player__count">
              {String(activeIndex + 1).padStart(2, "0")} / {String(tracks.length).padStart(2, "0")}
            </p>
            <h2 className="life-music-player__title">{activeTrack.title}</h2>
            <p className="life-music-player__artist">{activeTrack.artist}</p>
          </div>
        </div>

        <div className="life-music-player__video">
          <iframe
            key={activeTrack.youtubeId}
            src={`https://www.youtube-nocookie.com/embed/${activeTrack.youtubeId}?rel=0`}
            title={`${activeTrack.title} — ${activeTrack.artist}`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="life-music-player__controls">
          <button
            type="button"
            className="life-music-player__skip"
            onClick={() => onSelectTrack(previousTrack.id)}
          >
            <span>← {String(activeIndex || tracks.length).padStart(2, "0")}</span>
            <strong>{previousTrack.title}</strong>
            <small>{previousTrack.artist}</small>
          </button>

          <button
            type="button"
            className="life-music-player__skip life-music-player__skip--next"
            onClick={() => onSelectTrack(nextTrack.id)}
          >
            <span>{String((activeIndex + 1) % tracks.length + 1).padStart(2, "0")} →</span>
            <strong>{nextTrack.title}</strong>
            <small>{nextTrack.artist}</small>
          </button>
        </div>
      </div>

      <div className="life-music-playlist" aria-label={topic?.title}>
        {tracks.map((track, index) => {
          const isActive = track.id === activeTrack.id;

          return (
            <button
              key={track.id}
              type="button"
              aria-pressed={isActive}
              className={`life-music-track ${isActive ? "life-music-track--active" : ""}`}
              onClick={() => onSelectTrack(track.id)}
            >
              <span className="life-music-track__number">
                {isActive ? "▶" : String(index + 1).padStart(2, "0")}
              </span>
              <span className="life-music-track__copy">
                <strong>{track.title}</strong>
                <span>{track.artist}</span>
              </span>
              <span className="life-music-track__arrow" aria-hidden="true">›</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function LifeMediaPanel({
  title,
  items,
  imageFit = "cover",
}: {
  title: string;
  items: LifeGame[];
  imageFit?: "cover" | "contain";
}) {
  return (
    <div className="life-featured-wrap">
      <article className="life-topic-card life-topic-card--featured card-surface">
        <h2 className="life-topic-card__title">{title}</h2>
        <div className="life-games-grid">
          {items.map((item) => (
            <figure key={item.id} className="life-game-banner">
              <div
                className={`life-game-banner__frame ${imageFit === "contain" ? "life-game-banner__frame--contain" : ""}`}
              >
                <Image
                  src={withBasePath(item.image)}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 18vw"
                  className={`life-game-banner__image life-game-banner__image--${imageFit}`}
                />
              </div>
              <figcaption className="life-game-banner__label">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </article>
    </div>
  );
}

function TopicPanel({ topic }: { topic: LifeTopic }) {
  return (
    <article className="life-topic-card life-topic-card--featured card-surface">
      <h2 className="life-topic-card__title">{topic.title}</h2>
      <p className="life-topic-card__pitch mt-3">{topic.pitch}</p>
      {topic.items?.length ? (
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
          {topic.items.join(" · ")}
        </p>
      ) : null}
    </article>
  );
}
