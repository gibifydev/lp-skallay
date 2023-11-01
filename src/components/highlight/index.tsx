type HighlightProps = {
  highlight_title: string;
  highlight_description: string;
  highlight_bg_color: string;
  highlight_title_color: string;
  highlight_description_color: string;
  highlight_button_bg_color: string;
  highlight_button_label_color: string;
  highlight_button_link: string;
  highlight_button_label: string;
}
export function Highlight({
  highlight_title,
  highlight_description,
  highlight_bg_color,
  highlight_description_color,
  highlight_title_color,
  highlight_button_link,
  highlight_button_bg_color,
  highlight_button_label_color,
  highlight_button_label
}: HighlightProps) {
  return (
    <section
      style={{
        backgroundColor: highlight_bg_color,
      }}
      className="px-2 py-10 sm:py-12 sm:px-16 text-base shadow-sm w-full"
    >
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto text-center">
        <div
          style={{
            color: highlight_title_color,
          }}
          className="text-2xl md:text-5xl font-extrabold leading-6 sm:leading-10"
        >
          {highlight_title}
        </div>
        <div
          style={{
            color: highlight_description_color,
          }}
          className="mt-2 text-xl font-extrabold leading-6 sm:leading-10 text-opacity-70"
        >
          {highlight_description}
        </div>
        <a
          style={{
            backgroundColor: highlight_button_bg_color,
            color: highlight_button_label_color,
          }}
          href={highlight_button_link}
          className="mt-4 py-4 px-5 rounded-full text-sm uppercase"
          target="_blank"
        >
          {highlight_button_label}
        </a>
      </div>
    </section>
  )
}