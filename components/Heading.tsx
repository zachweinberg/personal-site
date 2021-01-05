interface Props {
  title: string
  subheading?: boolean
}

const Heading: React.FunctionComponent<Props> = ({ title, subheading }: Props) => {
  const size = subheading ? 'text-3xl' : 'text-5xl'
  const Tag = subheading ? 'h2' : 'h1'
  return <Tag className={`font-bold ${size} tracking-tight mb-4`}>{title}</Tag>
}

export default Heading
