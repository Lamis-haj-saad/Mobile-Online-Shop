import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Search() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const location = useLocation();

    const hidePage = location.pathname === "/cart" || location.pathname === "/checkout";

    if (hidePage) {
        return null; // Don't render Navigation if we're on the cart page
    }


    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/searchpage?search=${query}`);
        }
    };

    return (
        <div className="col-sm-4">
            <input
                type="text"
                style={{ marginTop: "30px" }}
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <input type="button" value="Search" onClick={handleSearch} />
        </div>
    );
}
