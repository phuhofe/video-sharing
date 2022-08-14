import { ShareIcon, ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';

export type YoutubeData = {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
};

import profilePic from '../../public/images/video.png';

export default function YoutubeCard(data): JSX.Element {
  return (
    <>
      <div className="border-2 rounded-md border-purple-400 p-4 flex cursor-pointer hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50 ">
        <div className="mr-4 h-48 w-48">
          <Image
            src={profilePic}
            alt="Picture of the author"
            layout="intrinsic"
          />
        </div>
        <div className="w-full">
          <h3 className="text-xl font-bold  mb-2 flex items-start justify-between">
            <span className="text-red-300">{data.title}</span>

            {data.share && (
              <Link href={
                {
                  pathname: "/share",
                  query: { id: data.id },
                }
              }>
                <button>
                  <ShareIcon className="h-6 w-6 text-purple-500" />
                </button>
              </Link>
            )}
          </h3>

          <p>Shared by: {data.user ? data.user : 'No '}</p>

          <div className="flex gap-8 items-center mb-4">
            <div className="flex items-center gap-2">
              <span>100</span>
              <ThumbUpIcon className="h-8 w-8 text-purple-500" />
            </div>

            <div className="flex items-center gap-2">
              <span>100</span>
              <ThumbDownIcon className="h-8 w-8 " />
            </div>
          </div>
          <p className="mb-3">Description: </p>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  );
}
