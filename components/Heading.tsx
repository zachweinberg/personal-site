interface Props {
  title: string
  subheading?: boolean
}

const Heading: React.FunctionComponent<Props> = ({ title, subheading }: Props) => {
  const size = subheading ? 'text-xl md:text-3xl' : 'text-2xl sm:text-5xl'
  const Element = subheading ? 'h2' : 'h1'
  return <Element className={`font-bold ${size} mb-4`}>{title}</Element>
}

export default Heading
