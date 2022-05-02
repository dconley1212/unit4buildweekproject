import * as Yup from "yup";

const AddPlantFormSchema = Yup.object({
  nickname: Yup.string().trim().required(),
  species: Yup.string().trim().required(),
  h20_frequency: Yup.string().trim().required(),
});

export default AddPlantFormSchema;
