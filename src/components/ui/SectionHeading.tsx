interface SectionHeadingProps {
  title: string
  titleAccent?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  titleAccent,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="section-heading">
        {title}{' '}
        {titleAccent && (
          <span className="text-gold-italic">{titleAccent}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`section-subheading mt-4 ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
