/* eslint-disable prettier/prettier */
"use client";

export default function Experience({ data }) {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      id="scrollspyHeading4"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="relative border-l-4 border-indigo-600 dark:border-indigo-400 pl-4 md:pl-8 space-y-12">
          {data.map((job, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl shadow-md dark:shadow-lg transition-all duration-300
                ${index % 2 === 0 ? "bg-white/90 dark:bg-gray-800/90" : "bg-indigo-50/60 dark:bg-indigo-900/60"}
                hover:shadow-xl hover:scale-[1.02] md:ml-${index % 2 === 0 ? "0" : "12"} md:mr-${index % 2 === 0 ? "12" : "0"}
              `}
            >
              {/* Timeline marker */}
              <div
                className="absolute -left-6 top-6 w-4 h-4 rounded-full shadow-md border-2 border-white dark:border-gray-800"
                style={{ backgroundColor: job.color }}
              />

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {job.title}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                {job.company} | {job.date}
              </p>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
