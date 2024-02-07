import clsx from "clsx";

export default function Modal() {
  return (
    <section
      className={clsx(
        "h-screen w-screen",
        "bg-black",
        "absolute top-0 left-0 right-0",
        "flex justify-center items-center"
      )}
    >
      <main
        className={clsx(
          "bg-black",
          "h-fit w-fit py-10 px-14",
          "z-20",
          "flex justify-center items-center flex-col",
          "text-white",
          "rounded-2xl",
          "border-2 border-purple-600"
        )}
      >
        <p className="text-2xl md:text-4xl mb-10 text-center">
        💙SIIIIIII!! TE QUIERO💙
        </p>
        <img 
          src="./milk-and-mocha.gif"
          alt="yeah dance"
          className={clsx("rounded-xl", "h-[20vh]", "mb-10")}
        />
        <p className="text-l md:text-2xl text-center justify-center">
        🎼 Te confieso que esto nunca me pasó antes y desde hace tiempo me perdí en tu mirada 🎼
        </p>
        <p
          className="mt-20 text-sm text-white/40 cursor-pointer"
          onClick={() => window.location.reload()}
        >
         Intentalo mil veces, al final siempre es si ◀️
        </p>
      </main>
    </section>
  );
}
