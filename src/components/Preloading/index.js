import React from "react";

function Preloading() {
  return (
    <main className="bg-light h-100">
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col">
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Preloading;
