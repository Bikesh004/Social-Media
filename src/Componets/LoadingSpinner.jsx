function LoadingSpinner() {
  return (
    <div class="d-flex justify-content-center spiner">
      <div
        class="spinner-border"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
