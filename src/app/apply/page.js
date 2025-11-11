export default function Apply() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-3xl font-bold">Application Documents</h1>
      {/* <p className="text-muted-foreground">
        Choose an application to continue.
      </p> */}
      <nav className="flex flex-col gap-2">
        <a
          className="text-blue-500 hover:text-blue-700 underline"
          href="/apply/sybil"
        >
          sybil
        </a>
        <a
          className="text-blue-500 hover:text-blue-700 underline"
          href="/apply/application2"
        >
          Application 2
        </a>
        <a
          className="text-blue-500 hover:text-blue-700 underline"
          href="/apply/application3"
        >
          Application 3
        </a>
      </nav>
    </div>
  )
}
