const FavourCard = ({ changeBigFavourImage, favourImg, imageURL }) => {
  const handleClick = () => {
    if (favourImg !== imageURL.favour) {
      changeBigFavourImage(imageURL.favour);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        favourImg === imageURL.favour ? "border-red-400" : "border-transparent"
      } cursor-pointer max-sm:flex-1 bg-gradient-to-r from-blue-100 to-blue-300`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imageURL.thumbnail}
          alt="shoeCollection"
          width={127}
          height={103}
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default FavourCard;
