export default function PageHeadersSimplewithCover() {
    return (
      <>
        {/* Page Header Section: Simple with Cover */}
        <div
          className="bg-cover bg-bottom"
          style={{
            backgroundImage:
              'url("https://cdn.tailkit.com/media/placeholders/photo-Nyvq2juw4_o-1280x400.jpg")',
          }}
        >
          <div className="bg-white bg-opacity-90 dark:bg-gray-900/90 dark:text-gray-100">
            <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
              <div className="text-center">
                <div className="mb-1 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500">
                  Features
                </div>
                <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
                  Fully Responsive UI Components
                </h2>
                <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 lg:w-2/3">
                  Carefully coded and tested. You can use them to build the UI of
                  your web project without ever leaving your HTML.
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* END Page Header Section: Simple with Cover */}
      </>
    );
  }
  