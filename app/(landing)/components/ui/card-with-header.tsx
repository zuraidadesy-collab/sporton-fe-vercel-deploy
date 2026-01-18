type TCardWithHeaderProps = {
    tittle: string;
    children: React.ReactNode;
}

const CardWithHeader = ({tittle, children}: TCardWithHeaderProps) => {
    return (
        <div className="bg-white">
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="font-bold text-lg">{tittle}</h2>
      </div>
      {children}
      </div>
    )
}

export default CardWithHeader;