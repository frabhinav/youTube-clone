import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchCard({ data }) {
  return (
    <div className='flex gap-3'>
      <div className='relative'>
        <span className='absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10'>
          {data.videoDuration}
        </span>

        <Link to={`/watch/${data.videoId}`}>
          <img src={data.videoThumbnail} alt='Video Thumbnail' className='h-44 w-72' />
        </Link>
      </div>
      <div className='flex gap-1 flex-col'>
        <h3 className='max-w-2xl'>
          <Link to={`/watch/${data.videoId}`} className='line-clamp-2'>
            {data.videoTitle}
          </Link>
        </h3>
        <div className='text-xs text-gray-400'>
          <div>
            <span className="after:content-['•'] after:mx-1">
              {data.videoViews} views
            </span>
            <span>
              {data.videoAge}
            </span>
          </div>
        </div>
        <div className='min-w-fit my-2'>
          <Link to={`/channel/${data.channelInfo.id}`} className='flex items-center gap-2 text-xs text-gray-400'>
            <img
              src={data.channelInfo.image}
              alt={data.channelInfo.name}
              className='h-9 w-9 rounded-full'
            />
            <span>{data.channelInfo.name}</span>
          </Link>
        </div>
        <div>
          <div className='max-w-2xl line-clamp-2 text-sm text-gray-400'>
            <p>{data.videoDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
