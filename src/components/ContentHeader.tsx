interface GenreProps {
  title: string;
}

export function ContentHeader({title}: GenreProps) {
  return (
    <header>
        <span className="category">Categoria:<span> {title}</span></span>
    </header>
  );
}