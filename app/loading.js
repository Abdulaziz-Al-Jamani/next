// app/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white ">
      <div className="flex flex-col items-center gap-4">
        {/* دائرة تحميل */}
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>

        {/* نص */}
        <p className="text-gray-900 font-medium">جاري التحميل...</p>
      </div>
    </div>
  );
}
