/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";

export default function About({ data }) {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      id="scrollspyHeading2"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left: Photo */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 shadow-lg dark:shadow-gray-700">
            <Image
              alt={data.name}
              className="object-cover w-full h-full"
              height={256}
              src="/WhatsApp_Image_2024-03-29_at_17.02.16_7d884ee5-removebg.png"
              width={256}
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            {data.name}
          </h2>
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
            {data.title}
          </h3>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-gray-700 dark:text-gray-300">
            <a
              className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
              href={`mailto:${data.contact.email}`}
            >
              Email: {data.contact.email}
            </a>
            <a
              className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
              href={`tel:${data.contact.phone}`}
            >
              Phone: {data.contact.phone}
            </a>
            <span>Address: {data.contact.address}</span>
          </div>

          {/* Summary */}
          <ul className="space-y-3">
            {data.summary.map((point, index) => (
              <li
                key={index}
                className="text-gray-700 dark:text-gray-300 relative pl-5 before:absolute before:left-0 before:top-1/2 before:w-3 before:h-3 before:-translate-y-1/2 before:rounded-full before:bg-indigo-600 dark:before:bg-indigo-400 transition-all duration-300"
              >
                {point}
              </li>
            ))}
          </ul>

          {/* Skills as badges */}
          {data.skills && data.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {data.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
