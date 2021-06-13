export interface GameDecisionInterface {
    id: string;
    year_start: number;
    year_end: number;
    completed: boolean;
    decisions: DecisionInterface[];
};

export interface DecisionInterface {
    decision_id: number;
    decision_text: string;
    decision_asset: string;
    decision_options: DecisionOptionInterface[];
};

export interface DecisionOptionInterface {
    decision_option_id: number;
    decision_option_text: string;
    decision_option_asset: string;
    decision_option_value: number;
    decision_option_weap_variable: string;
};
