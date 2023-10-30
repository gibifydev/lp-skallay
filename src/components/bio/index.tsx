export default function Bio({ text }: { text: string }) {
  return (
    <div className="max-w-sm w-full my-8 px-4 md:p-0">
      <ul>
        <li>{text}</li>
      </ul>
    </div>
  )
}
