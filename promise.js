const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let counter = 0;
    const dataIXX = await promiseTheaterIXX();
    const dataVGC = await promiseTheaterVGC();

    for(const ixx of dataIXX){
      if(ixx.hasil === emosi){
        counter += 1;
      };
    };

    for(const vgc of dataVGC){
      if(vgc.hasil === emosi){
        counter += 1;
      };
    };

    return counter;
  } catch(err){
    console.log(err);
  };
};

module.exports = {
  promiseOutput,
};
