export default function Card({ name }) {
  return (
    <>
      <div className="border-2 border-violet-800 rounded-2xl p-4 text-center font-medium">
        {name}
      </div>
    </>
  );
}
