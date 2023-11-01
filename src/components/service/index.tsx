type ServicesProps = {
  service_bg_color: string;
  service_description_color: string;
  service_button_bg_color: string;
  service_button_label_color: string;
  service_description: string;
  service_whatsapp_link: string;
  service_button_label: string;
}
export function Services({
  service_bg_color,
  service_description_color,
  service_button_bg_color,
  service_button_label_color,
  service_description,
  service_whatsapp_link,
  service_button_label,
}: ServicesProps) {
  return (
    <section id="serviços" className="py-8 shadow-md w-full">
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto text-center">
        <div
          style={{
            backgroundColor: service_bg_color,
            color: service_description_color,
          }}
          className="md:text-2xl text-base p-2"
        >
          <p>{service_description}</p>
        </div>
        <a
          style={{
            backgroundColor: service_button_bg_color,
            color: service_button_label_color
          }}
          href={service_whatsapp_link}
          className="mt-4 px-12 rounded-full p-4 uppercase"
          target="_blank"
        >
          {service_button_label}
        </a>
      </div>
    </section>
  )
}