import { Search, Filter } from "lucide-react";

interface SearchFilterProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    statusFilter: string;
    onStatusFilterChange: (value: string) => void;
    speciesFilter: string;
    onSpeciesFilterChange: (value: string) => void;
    genderFilter: string;
    onGenderFilterChange: (value: string) => void;
}

export const SearchFilter = ({
    searchTerm,
    onSearchChange,
    statusFilter,
    onStatusFilterChange,
    speciesFilter,
    onSpeciesFilterChange,
}: SearchFilterProps) => {


    const handleStatusChange = (value: string) => {
        onStatusFilterChange(value);
    };

    const handleSpeciesChange = (value: string) => {
        onSpeciesFilterChange(value);
    };


    return (
        <div className="bg-gray-100 w-full border border-gray-200 rounded-lg shadow-xl p-2">
            <div className="flex flex-col md:flex-row  gap-2 w-full">
                <div className="flex gap-3">
                    <Filter className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold text-foreground">Filters</h2>
                </div>
                {/* Search */}
                <div className="relative items-center justify-center w-full md:w-90">
                    <Search className="absolute left-3 top-1 w-4 h-4 text-gray-500" />
                    <input
                        placeholder="Search characters..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-10 bg-slate-300 rounded-3xl focus:border-gray-50 w-full"
                    />
                </div>

                {/* Status Filter */}
                <div className="space-x-2">
                    <label className="text-sm font-medium text-slate-600">Status</label>
                    <select value={statusFilter}
                        className="bg-slate-300 rounded-3xl px-2"
                        onChange={(e) => handleStatusChange(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>

                {/* Species Filter */}
                <div className="space-x-2">
                    <label className="text-sm font-medium text-slate-600">Species</label>
                    <select value={speciesFilter}
                        className="bg-slate-300 rounded-3xl px-2"
                        onChange={(e) => handleSpeciesChange(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="human">Human</option>
                        <option value="alien">Alien</option>
                        <option value="humanoid">Humanoid</option>
                        <option value="robot">Robot</option>
                        <option value="cronenberg">Cronenberg</option>
                    </select>
                </div>
            </div>
        </div>
    );
};