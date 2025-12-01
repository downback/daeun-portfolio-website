import styles from "./maintenance.module.css"

export const metadata = {
  title: "Daeun Park",
  description: "The site has temporarily minimum functionality due to update.",
}

export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-8 sm:py-12">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold px-2">
          This website is under Construction
        </h1>
        <div className="flex justify-center items-center gap-2 sm:gap-3">
          <span className="text-4xl ">🚧</span>
          <span className="text-6xl">💻</span>
          <span
            className={`text-6xl inline-block ${styles.animateWrenchSwing}`}
          >
            🔧
          </span>
          <span className="text-4xl">👷</span>
        </div>
        <div>
          <p className="text-sm sm:text-base text-gray-600 px-4">
            You can check my portfolio at{" "}
            <a
              href="https://drive.google.com/file/d/1VPxf9k-7WkvBLC4zafChXuoOnc0A_UYZ/view?usp=sharing"
              className="text-blue-500 hover:text-blue-700 underline"
              target="_blank"
            >
              this link
            </a>
          </p>
          <p className="text-sm sm:text-base text-gray-600 px-4">
            You can contact me at{" "}
            <a
              href="mailto:daeun.down.back@gmail.com"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              daeunpark@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
