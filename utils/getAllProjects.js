import ethers from "ethers";
import { SEED_ABI, SEED_HUB } from "../constants";

async function getAllProjects() {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      throw new Error("Install any ethereum wallet");
    }
    // const provider = new ethers.providers.Web3Provider(ethereum);
    const provider = new ethers.providers.Web3Provider(ethereum,fetch);
    const signer = provider.getSigner();
    const ideally_hub = new ethers.Contract(SEED_HUB, SEED_ABI, signer);
    const allIdeas = await ideally_hub.getCampaigns();
    console.log(allIdeas);
    return allIdeas;
  } catch (error) {
    console.log(error);
  }
}
export default getAllProjects;
