import TextFormatter from './TextFormatter';


const InfoSection = ({
  title = "[Section Title]",
  description,
  bulletPoints = []
}) => {
  return (
    <div className='mt-10 lg:mt-12'>
          <h1 className="text-2xl lg:text-3xl font-bold border-b border-gray-200 mb-3">{title}</h1>
          {
            description ? (
              <div className="mt-3">
                <TextFormatter text={description} />
              </div>
            ) : null
          }
          <div className="mt-5">
            <ul className="space-y-3">
              {bulletPoints.map((item, index) => {
                return (
                  <li key={index} className="list-disc ml-5 lg:ml-6 text-base lg:text-lg">
                    <TextFormatter text={item} />
                  </li>
                );
              })}
            </ul>
          </div>
    </div>
  )
}

export default InfoSection;