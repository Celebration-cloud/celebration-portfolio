/* eslint-disable prettier/prettier */
"use client";

export default function Education({ data }) {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      id="scrollspyHeading6"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md dark:shadow-lg transition-all duration-300
                bg-white/90 dark:bg-gray-800/90 hover:shadow-xl hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {edu.institution}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                {edu.degree}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {edu.year}
              </p>
              {edu.license && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  License: {edu.license}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
