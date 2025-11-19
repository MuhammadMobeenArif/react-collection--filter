import React from "react";

function CenterImage() {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCZfxVm7ImLSS7SewrBBt52zEng2rlx_3RQ&s"
            alt="connection page"
            className="w-[40%] h-[20%] text-center mt-5 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default CenterImage;