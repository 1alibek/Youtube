"use client";

import { useState } from "react";
import {
  BiPause,
  BiPlay,
  BiVolumeFull,
  BiVolumeMute,
  BiExpand,
  BiLike,
  BiDislike,
  BiComment,
  BiShare,
  BiDotsVerticalRounded,
} from "react-icons/bi";

export default function Trending() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="relative max-w-md mx-auto h-screen bg-black">
      {/* Main Video Container */}
      <div className="relative h-full w-full">
        <img
          src="https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-9.jpg"
          alt="Osso Buco cooking"
          className="h-full w-full object-cover"
        />

        {/* Video Controls Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {/* Top Controls */}
          <div className="p-4 flex justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-black/50 hover:bg-black/60 transition-colors"
              >
                {isPlaying ? (
                  <BiPause className="w-6 h-6 text-white" />
                ) : (
                  <BiPlay className="w-6 h-6 text-white" />
                )}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-black/50 hover:bg-black/60 transition-colors"
              >
                {isMuted ? (
                  <BiVolumeMute className="w-6 h-6 text-white" />
                ) : (
                  <BiVolumeFull className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
            <button className="p-2 rounded-full bg-black/50 hover:bg-black/60 transition-colors">
              <BiExpand className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Right Side Controls */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
            <div className="flex flex-col items-center">
              <button className="p-2 rounded-full bg-black/50 hover:bg-black/60 transition-colors">
                <BiLike className="w-6 h-6 text-white" />
              </button>
              <span className="text-white text-sm mt-1">25 тыс.</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="p-2 rounded-full bg-black/50 hover:bg-black/60 transition-colors">
                <BiDislike className="w-6 h-6 text-white" />
              </button>
              <span className="text-white text-sm mt-1">Не</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="p-2 rounded-full bg-black/50 hover:bg-black/60 transition-colors">
                <BiComment className="w-6 h-6 text-white" />
              </button>
              <span className="text-white text-sm mt-1">60</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="p-2 rounded-full bg-black/50 hover:bg-black/60 transition-colors">
                <BiShare className="w-6 h-6 text-white" />
              </button>
              <span className="text-white text-sm mt-1">Поделиться</span>
            </div>
            <button className="p-2 rounded-full bg-black/50 hover:bg-black/60 transition-colors">
              <BiDotsVerticalRounded className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Bottom Info */}
          <div className="p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Channel avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-medium">
                  @redgodsofthehorizo
                </span>
              </div>
              <button className="px-4 py-2 bg-white rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Подписаться
              </button>
            </div>
            <h2 className="text-white text-lg font-medium">
              Osso Buco with Risotto Milanese
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
