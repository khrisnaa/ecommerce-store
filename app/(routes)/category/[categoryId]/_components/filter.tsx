'use client';

import qs from 'query-string';
import { Color, Size } from '@/definition';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

function Filter({ data, name, valueKey }: FilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    //currrent url
    const current = qs.parse(searchParams.toString());

    //add new filter to current url
    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              onClick={() => onClick(filter.id)}
              className={cn(
                'rounded-md border !border-gray-300 !bg-white p-2 text-sm !text-gray-900',
                selectedValue === filter.id && '!bg-black !text-white',
              )}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Filter;
