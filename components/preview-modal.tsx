'use client';

import { Gallery } from '@/components/gallery';
import { Info } from '@/components/info';
import { Modal } from '@/components/ui/modal';
import usePreviewModal from '@/hooks/use-preview-modal';

export const PreviewModal = () => {
  const { isOpen, onClose, onOpen } = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};
