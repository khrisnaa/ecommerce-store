export const Footer = () => {
  return (
    <div className="border-t bg-white">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2024 {process.env.NEXT_PUBLIC_STORE_NAME}, Inc. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};
