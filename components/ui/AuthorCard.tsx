const AuthorCard = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-4 rounded-2xl bg-gray-50 py-4 px-8 dark:bg-zinc-900 sm:flex-row sm:gap-12">
      <div className="justify-cente  w-1/2 hidden sm:flex md:w-2/3 flex-col items-center ">
        <div className="bg-gradient-to-br animate-gradient-xy from-cyan-500 to-purple-500 w-24 h-24 md:w-40 md:h-40 rounded-full" />
      </div>
      <div className="flex flex-col items-start justify-center ">
        <h3 className="text-xl font-semibold  text-zinc-800 dark:text-zinc-100  md:text-2xl">
          Mohamed Achaq
        </h3>
        <p className="text-md text-zinc-600 dark:text-zinc-400 ">
          Full Stack Developer, UI/UX Designer, and a passionate learner. Making
          the web a better place by building great products.
        </p>
      </div>
    </div>
  );
};
export default AuthorCard;
