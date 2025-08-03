import React from "react";
import PropTypes from "prop-types";

export default function RecentCard({ title, img, date, tag, name, username, href }) {
  return (
    <a
      href={href}
      aria-label={`Read more about ${title}`}
      className="group block w-full rounded-2xl overflow-hidden shadow-xl backdrop-blur-md bg-neutral-900 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex flex-col md:flex-row w-full">
        {/* Smaller Image */}
        <div className="relative md:w-1/5 w-full h-36 md:h-auto overflow-hidden flex-shrink-0">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        {/* Content */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-white mb-1 line-clamp-1 group-hover:underline transition-all duration-200">
              {title}
            </h2>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center text-lg font-semibold text-blue-800 shadow-inner">
                {name?.[0] || ""}
              </div>
              <div>
                <div className="font-medium text-white">{name}</div>
                <div className="text-xs text-white">@{username}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-blue-400">{date}</span>
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold shadow hover:bg-blue-200 transition-colors duration-200 text-xs">
              #{tag}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

RecentCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
