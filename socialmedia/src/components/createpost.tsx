import React from 'react';

const CreatePost: React.FC = () => {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Text</label>
                    <input type="text" className="form-control" id="staticEmail2" placeholder="Text" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Password" />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                </div>
            </form>
        </>
    );
}

export default CreatePost;