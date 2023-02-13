import "../../styles/forms/InstructionForm.css";

function InstructionForm({ instruction, instruction2 }) {
  return (
    <div className="instructionForm">
      <p>
        {instruction}
        {instruction2 ? (
          <span>
            <br /> {instruction2}
          </span>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}

export default InstructionForm;
