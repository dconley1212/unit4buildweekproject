import * as Yup from "yup";

const AddPlantFormSchema = Yup.object({
  nickname: Yup.string().trim().required("Nickname is required"),
  species: Yup.string().trim().required("Species is required"),
  h20_frequency: Yup.string().trim().required("h20 Frequency is required"),
});

export default AddPlantFormSchema;
