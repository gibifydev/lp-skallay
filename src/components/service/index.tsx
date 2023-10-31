type ServicesProps = {
  service_description: string;
  service_whatsapp_link: string;
  service_button_label: string;
  service_button_bg_color: string;
  service_button_label_color: string;
}
export default function Services({
  service_description,
  service_whatsapp_link,
  service_button_label,
  service_button_bg_color,
  service_button_label_color
}: ServicesProps) {
  return (
    <section className="py-8 shadow-sm w-full">
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto text-center">
        <div className="md:text-2xl text-base p-2 text-gray-600">
          <p>{service_description}</p>
        </div>
        <a
          style={{
            backgroundColor: service_button_bg_color,
            color: service_button_label_color
          }}
          className="mt-4 px-12 rounded-full p-4 uppercase"
          href={service_whatsapp_link}
          target="_blank"
        >
          {service_button_label}
        </a>
      </div>
    </section>
  )
}