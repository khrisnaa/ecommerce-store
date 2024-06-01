import { Image as ImageType } from '@/definition';
import { cn } from '@/lib/utils';
import { Tab } from '@headlessui/react';
import Image from 'next/image';

export const GalleryTab = ({ image }: { image: ImageType }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
            <Image
              src={image.url}
              fill
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              'absolute z-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
  );
};
