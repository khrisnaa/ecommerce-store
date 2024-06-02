'use client';

import Filter from './filter';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Color, Size } from '@/definition';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

export const MobileFilter = ({ sizes, colors }: MobileFilterProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="gap-x2 flex items-center lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        onClose={onClose}
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton onClick={onClose} icon={<X />} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
