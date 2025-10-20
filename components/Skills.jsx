/* eslint-disable prettier/prettier */
"use client";

export default function Skills({ data }) {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      id="scrollspyHeading3"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((skill, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {skill.label}
              </h3>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5">
                <div
                  className="h-5 rounded-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-1000"
                  style={{ width: skill.grade }}
                />
              </div>

              {skill.tools && skill.tools.length > 0 && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {skill.tools.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
