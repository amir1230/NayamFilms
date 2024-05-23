import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col justify-start lg:ms-40 lg:me-40 gap-3">
        <Image
          src="/assets/contact/we-are-located.svg"
          alt="we-are-located"
          width={340}
          height={100}
          className="object-cover"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.743209466796!2d73.0262496745337!3d33.715593035433436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef8c137888d%3A0xc3ccfd031ad14ba6!2sBahria%20University%20-%20Islamabad%20Campus!5e0!3m2!1sen!2s!4v1716473473448!5m2!1sen!2s"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[21px] w-full"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
