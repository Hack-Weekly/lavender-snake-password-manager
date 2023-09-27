import Button from "../components/Button";

export const LandingPage = () => {
    return(
        <div className="flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4 text-white">LavenderSnake Password Manager</h1>
        <div className="space-x-4 my-20">
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
    )
}
