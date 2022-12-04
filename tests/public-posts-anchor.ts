import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { PublicPostsAnchor } from "../target/types/public_posts_anchor";

describe("public-posts-anchor", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.PublicPostsAnchor as Program<PublicPostsAnchor>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
